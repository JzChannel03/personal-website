import { NextResponse, NextRequest } from "next/server";
import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";

const resend = new Resend("re_StBehRMu_McYvUR8K1fJb9nSZYpUvXmvL");

interface IResendRequest extends NextRequest {
  json(): Promise<{
    subject: string;
    firstName: string;
    text: string;
  }>;
}

export async function POST(req: IResendRequest) {
  const searchParams = req.nextUrl.searchParams;
  searchParams.forEach((value, key) => {
    console.log(key, value);
  });
  const body = await req.json();
  console.log(body);
  const { data, error } = await resend.emails.send({
    from: "JuancitoMails <onboarding@resend.dev>",
    to: ["jrva630@gmail.com"],
    subject: body.subject,
    react: EmailTemplate({ firstName: body.firstName }),
    text: body.text,
  });

  if (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }

  return NextResponse.json({ data: data }, { status: 200 });
  /* return NextResponse.json({ data: data }); */
}
