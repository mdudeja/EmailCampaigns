import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const v = getQSParamFromURL("app_variant", req.url);
    const c = getQSParamFromURL("count", req.url);
    const updated = increment(v || "", c || "");
    return NextResponse.json(updated);
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

function increment(app_variant: string, count_type: string) {
    if (app_variant === "queertrans") {
        if (count_type === "visits") {
            const current_visits = +(process.env.VISIT_COUNT_QT || 0);
            process.env.VISIT_COUNT_QT = (current_visits + 1).toString();
        } else if (count_type === "emails") {
            const current_emails = +(process.env.EMAIL_COUNT_QT || 0);
            process.env.EMAIL_COUNT_QT = (current_emails + 1).toString();
        }
        return {
            visits: process.env.VISIT_COUNT_QT,
            emails: process.env.EMAIL_COUNT_QT,
        }
    } else if (app_variant === "feminists") {
        if (count_type === "visits") {
            const current_visits = +(process.env.VISIT_COUNT_FEM || 0);
            process.env.VISIT_COUNT_FEM = (current_visits + 1).toString();
        } else if (count_type === "emails") {
            const current_emails = +(process.env.EMAIL_COUNT_FEM || 0);
            process.env.EMAIL_COUNT_FEM = (current_emails + 1).toString();
        }
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