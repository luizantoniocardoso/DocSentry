import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware responsável por verificar a autenticação do usuário e redirecionar
 * para a página apropriada com base no estado do token.
 *
 * @param {NextRequest} request - O objeto de requisição Next.js.
 * @returns {NextResponse} A resposta Next.js apropriada com base na verificação do token de autenticação.
 */
export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const { origin, pathname } = request.nextUrl;

  const isAuth = request.cookies.get("user")?.value;
  const isLoginPage = pathname.startsWith("/login");

  if (isLoginPage) {
    if (isAuth) {
      return NextResponse.redirect(`${origin}/home`);
    }
  }

  if (!isAuth) {
    return NextResponse.redirect(`${origin}/login`);
  }

  return response;
}

export const config = {
  matcher: ["/((?!login|api|_next|static|favicon.ico).*)"],
};
