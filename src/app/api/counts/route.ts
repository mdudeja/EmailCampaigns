import { NextApiRequest } from "next";
import { NextResponse } from "next/server";


export async function GET(req: NextApiRequest) {
    const v = getQSParamFromURL("app_variant", req.url);
    const counts = fetchCounts(v || "");
    return NextResponse.json(counts);
}

function getQSParamFromURL(
  key: string,
  url: string | undefined
): string | null {
  if (!url) return "";
  const search = new URL(url).search;
  const urlParams = new URLSearchParams(search);
  return urlParams.get(key);
}

function fetchCounts(app_variant: string) {
    if (app_variant === "queertrans") {
        return {
            visits: process.env.VISIT_COUNT_QT,
            emails: process.env.EMAIL_COUNT_QT,
        }
    } else if (app_variant === "feminists") {
        return {
            visits: process.env.VISIT_COUNT_FEM,
            emails: process.env.EMAIL_COUNT_FEM,
        }
    }

    return {
        visits: 0,
        emails: 0,
    }

}