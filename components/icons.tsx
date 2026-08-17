import React from "react";

export function GithubIcon({ className = "h-4 w-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-4 w-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function UpworkIcon({ className = "h-4 w-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-3.057 0-4.992 1.94-5.632 4.195-1.579-2.316-2.585-5.06-2.909-7.213H6.877v7.697c0 2.215-1.798 4.013-4.013 4.013H.001v2.902h2.863c3.818 0 6.915-3.097 6.915-6.915V5.556c.367 1.83 1.295 4.305 2.793 6.643l-2.025 9.8h3.003l1.455-7.037c1.07.828 2.308 1.34 3.556 1.34 3.098 0 5.617-2.519 5.617-5.618 0-3.098-2.52-5.624-5.617-5.624z" />
    </svg>
  );
}

export function IndeedIcon({ className = "h-4 w-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M11.566 21.996c.018-.458.04-1.393.04-2.04v-9.35c0-1.89-1.026-2.766-2.734-2.766-.99 0-2.083.33-2.934.82v13.336H1.93V7.27h3.914v1.89c1.173-.99 2.706-1.536 4.316-1.536 3.655 0 5.398 2.19 5.398 5.64v8.732h-3.992zM6.002 4.344C6.002 5.54 5.04 6.5 3.844 6.5 2.648 6.5 1.686 5.54 1.686 4.344 1.686 3.148 2.648 2.186 3.844 2.186c1.196 0 2.158.962 2.158 2.158z" />
    </svg>
  );
}
