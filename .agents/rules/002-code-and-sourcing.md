# 002 - Sourcing, Code Standards, and Anti-Hallucination Rules

## 1. The "No-Guessing" Protocol (Anti-Hallucination)

- **Never guess APIs:** If you do not know the exact, up-to-date syntax for a library, framework, or API, **STOP**. Do not invent functions or parameters.
- **Acknowledge knowledge gaps:** Explicitly state: "I need the official documentation for [Feature] to proceed safely."
- **Use local context first:** Always check the `package.json` to see which specific version of a library we are using before writing code for it.

## 2. Safe Installation Rules

- **No rogue installs:** Never tell the user to run `npm install` or `npx` for a random package without explaining *why* it is necessary and confirming it is safe.
- **Check existing tools:** Before suggesting a new library, check if the current stack (Next.js, Tailwind, Node.js) can already solve the problem natively.
- **Verified Sources Only:** Only recommend packages from official, verified sources (e.g., official NPM registry, React docs, Next.js docs).

## 3. Extracting and Using Documentation

- **Ask for the Source:** If a task requires external documentation, ask the user to provide the exact URL or paste the official Markdown documentation into a `.agents/knowledge/` folder.
- **Read before writing:** If given a link or a document, read the *entire* provided context before generating the implementation plan.

## 4. Code Snippet & Formatting Standards

- **Strict Markdown:** Always wrap code in proper Markdown blocks with the correct language tag (e.g., `javascript`, `bash`).
- **Linting Compliance:** Output code that matches our existing linting rules (e.g., no trailing spaces, correct indentation).
- **Only output what changed:** Do not print a 500-line file if you only changed 3 lines. Show the exact function being modified and clearly indicate where it goes.

## 5. Approved Documentation Sources

When generating code, validating syntax, or asking the user for reference materials, strictly prioritize the following verified sources. Do not use deprecated APIs or unverified blogs.

- **Next.js (App Router):** <https://nextjs.org/docs>
- **React:** <https://react.dev/reference/react>
- **Node.js:** <https://nodejs.org/en/docs/>
- **shadcn/ui (Components):** <https://ui.shadcn.com/docs> (e.g., <https://ui.shadcn.com/docs/components/table>)
- **Tailwind CSS:** <https://tailwindcss.com/docs>
- **Gemini AI API:** <https://ai.google.dev/docs>
- **Resend (Emails):** <https://resend.com/docs>
- **NPM Registry:** <https://www.npmjs.com/>
