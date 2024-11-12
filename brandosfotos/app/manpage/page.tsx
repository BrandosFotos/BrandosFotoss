export default function ManPage() {
  return (
    <div className="text-xs md:text-medium lg:text-lg">
      <div className="flex">
        <div className="flex-auto w-15 text-left...">BRANDON WHITE</div>
        <div className="flex-auto w-32 text-center...">Linux Users Manual</div>
        <div className="flex-auto w-15 text-right...">BRANDON WHITE (27)</div>
      </div>

      <div className="text-left py-10">
        <div>
          <p>NAME</p>
        </div>

        <div>
          <p className="ml-16">Brandon White - Junior System Integrator</p>
        </div>

        <div>
          <p>SYNOPSIS</p>
        </div>

        <div>
          <p className="ml-16">brandon [--web-developer] [--tech-writer]</p>
        </div>

        <div>
          <p>SUMMARY</p>
        </div>

        <div>
          <p className="ml-16">
            Experienced Software Enthusiast with 8+ years of experience
            developing and managing software projects. Has well built experience
            with multiple technologies and has worked on diverse project types,
            from DIY Sprinkler Systems to Managing a at-home Windows Server.
            <br />
            <br />
            Throughout his career, he has placed teamwork, consistent delivery,
            exceptional results, comfortably handling multiple responsibilities,
            positioning clear deadlines, and finding creative solutions to clear
            roadblocks.
            <br />
            <br />
            For the last couple years, he has also been working as a
            Self-Employed Contractor, gathering experience managing
            subcontractors, leading technical decisions, and encouraging a
            collaborative work enviroment.
            <br />
            <br />
            In addition, he has actively contributed to the tech community as a
            tech writer. My contributions can be found namely on
            https://whatbox.ca/.
          </p>
        </div>

        <div>
          <p>OPTIONS</p>
        </div>

        <div>
          <p className="ml-16">--web-developer</p>
          <p className="ml-20 py-2">
            {" "}
            Working with web development, I have experience with TailwindCSS,
            PHP and NextJS. I am always open to learn new technologies and I am
            used to be involved in the full software life cycle, from conception
            and design to infrastructure, implementation, unity tests and
            deployment.
          </p>
          <p className="ml-20 py-2"> General Knowledge:</p>
          <ol className="ml-24 py-2 list-disc">
            <li>HTML, Javascript, CSS, TailwindCSS, NextJS;</li>
            <li>
              Programming languages: Python, NextJS, PHP, Batch, Shell, C#,
              MQTT, YAML;
            </li>
            <li>Test Driven Development (TDD);</li>
            <li>Linux Ubuntu Server;</li>
            <li>Linux Gentoo Server;</li>
            <li>Windows Server 2022;</li>
            <li>Microsoft Azure;</li>
            <li>MongoDB;</li>
          </ol>
          <p className="ml-16 py-2">--tech-writer</p>
          <p className="ml-20">Whatbox.ca Forums</p>
        </div>

        <div>
          <p>NOTES</p>
        </div>
        <div>
          <ol className="ml-24 py-2 list-disc">
            <li>
              Pursuing Bachelor of CyberSecurity - University of Tennessee
              Knoxville (UTK)
            </li>
            <li>Systems Integrator for US Navy</li>
          </ol>
        </div>

        <div>
          <p>HISTORY</p>
        </div>

        <div>
          <p>SEE ALSO</p>
        </div>
      </div>
    </div>
  );
}
