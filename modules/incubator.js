const Incubator = () => {
  return (
    <section>
      <h1>
        Incubator <span style={{ width: '12%' }}></span>
      </h1>

      <h2> KT Ruby Engineering Incubator Program</h2>
      <p>
        What is the Ruby Incubator Program? <br />
        If you are a software engineering or computer science student and you’re
        interested in a career in web development, we offer a program of support
        and progress to help you grow into this capability. This program is
        offered by the Kennedy Technology team to help bridge the gap and help
        people become capable with web software development skills, as this is a
        growing and promising field. The program is self-paced, and participants
        will be in charge of their participation in the program. We will provide
        resources, check-in calls, mentoring, community support, and more for
        participants as they develop the skills for a career as a web software
        developer.
      </p>
      <p> Requirements needed to apply for this program: </p>
      <ul className="list-disc md:text-xl pl-8 mb-3">
        <li>
          Active student in a software engineering or computer science field of
          study.
        </li>
        <li>
          Actively engaged in self-study for software development, and familiar
          with code.
        </li>
        <li>
          Currently or previously employed in some other IT related field.
        </li>
      </ul>
      <p>
        If you meet any of these requirements and would like to participate in
        our free program, please apply at any time at jobs@kennedytech.mk!
      </p>
      <p className="font-thin tracking-tight">
        *Make sure to include
        <span className="italic">Ruby Engineering Incubator Program</span> as a
        subject in your email.
      </p>
      <div className="button-container">
        <a href="mailto:jobs@kennedytech.mk" className="button-primary">
          Apply
        </a>
      </div>
    </section>
  );
};

export default Incubator;
