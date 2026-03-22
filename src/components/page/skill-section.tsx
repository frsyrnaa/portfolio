import { Separator } from "../ui/separator";

export function SkillSection() {
  return (
    <section className="w-full bg-background space-y-4 p-6 border border-border rounded-2xl">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
        Technical Skills
      </h2>
      <div className="flex flex-col w-full space-y-6">
        <div>
          <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
            Programming Languages
          </h3>
          <p className="text-muted-foreground">
            Python, HTML, CSS, JavaScript, C++, Java.
          </p>
        </div>
        <div>
          <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
            Tools
          </h3>
          <p className="text-muted-foreground">
            Visual Studio Code, Jupyter Notebook, Google Colab, Figma.
          </p>
        </div>
        <Separator />
        <div>
          <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
            Additional Skills
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-sm/6 text-muted-foreground">
            <li>UI/UX Design</li>
            <li>Social Media Design</li>
            <li>Problem Solving</li>
            <li>Collaboration in academic projects</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
