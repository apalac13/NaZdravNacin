import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const NEWSLETTER_AUDIENCE_ID = process.env.RESEND_NEWSLETTER_AUDIENCE_ID;

export async function POST(req) {
  try {
    const body = await req.json();

    // NEWSLETTER PRETPLATA
    if (body.formType === "newsletter") {
      const result = await resend.contacts.create({
        email: body.email,
        audienceId: NEWSLETTER_AUDIENCE_ID,
      });

      console.log("CONTACT CREATE RESULT:", result);

      return Response.json({ success: true });
    }

    // ODABIR PRIMATELJA
    let recipient = "nazdravnacin@gmail.com";

    if (body.formType === "tjednizdravlja") {
      recipient = "izleti.nazdravnacin@gmail.com";
    }

    console.log("RECIPIENT:", recipient);

    const subjectMap = {
      kontakt: "Nova kontakt poruka",
      program: "Nova prijava programa",
      tjednizdravlja: "Nova prijava - Tjedni zdravlja",
      voucher: "Novi zahtjev za poklon bon",
    };

    await resend.emails.send({
      from: "Na Zdrav Način <onboarding@resend.dev>",
      to: recipient,
      replyTo: body.email,
      subject: subjectMap[body.formType],
      html: `
        <h2>${subjectMap[body.formType]}</h2>

        ${
          body.option
            ? `<p><strong>Odabrana opcija:</strong> ${body.option}</p>`
            : ""
        }

        ${
          body.voucher
            ? `<p><strong>Poklon bon:</strong> ${body.voucher}</p>`
            : ""
        }

        <p><strong>Ime i prezime:</strong> ${body.person}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Telefon:</strong> ${body.phoneNumber}</p>
        <p><strong>Poruka:</strong> ${body.message || "-"}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    );
  }
}
