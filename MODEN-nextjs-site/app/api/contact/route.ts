import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.formData()
  const name = String(body.get('name')||'')
  const email = String(body.get('email')||'')
  const phone = String(body.get('phone')||'')
  const message = String(body.get('message')||'')
  if(!name || !email || !message){
    return NextResponse.json({ ok:false, error: 'Missing fields' }, { status: 400 })
  }

  // Send via Resend if API key present, otherwise fallback to mailto response
  if (process.env.RESEND_API_KEY) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'MODEN Website <no-reply@moden.gr>',
          to: ['info@modendevelopment.gr'],
          subject: 'New inquiry from moden.gr',
          html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone}</p><p><b>Message:</b><br/>${message.replace(/\n/g,'<br/>')}</p>`
        })
      })
      if (!res.ok) throw new Error(await res.text())
      return NextResponse.redirect(new URL('/?sent=1', req.url))
    } catch (e) {
      return NextResponse.json({ ok:false, error: 'Failed to send' }, { status: 500 })
    }
  } else {
    const mailto = `mailto:info@modendevelopment.gr?subject=New%20inquiry%20from%20moden.gr&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`)}`
    return NextResponse.redirect(mailto)
  }
}
