import Image from 'next/image';

const members = [
  {
    name: 'Sam',
    title: 'Founder',
    front: '/images/avatars/sam.jpg',
    back: '/images/employees/sam1.jpg',
  },
  {
    name: 'Violet',
    title: 'Software Engineer',
    front: '/images/avatars/violeta.jpg',
    back: '/images/employees/violeta1.jpg',
  },
  {
    name: 'Orce',
    title: 'Software Engineer',
    front: '/images/avatars/orce.jpg',
    back: '/images/employees/orce1.jpg',
  },
  {
    name: 'Mohammad',
    title: 'Software Engineer',
    front: '/images/avatars/muki.jpg',
    back: '/images/employees/muki1.jpg',
  },
  {
    name: 'Goran',
    title: 'Software Engineer',
    front: '/images/avatars/goran.jpg',
    back: '/images/employees/goran1.jpg',
  },
  {
    name: 'Teala',
    title: 'Software Engineer',
    front: '/images/avatars/teala.jpg',
    back: '/images/employees/teala1.jpg',
  },
  {
    name: 'Hristina',
    title: 'Operations Manager',
    front: '/images/avatars/kiki.jpg',
    back: '/images/employees/kiki1.jpg',
  },
  {
    name: 'Nikola',
    title: 'Software Engineer',
    front: '/images/avatars/nikola.png',
    back: '/images/employees/nikola1.png',
  },
  {
    name: 'Biljana',
    title: 'Online Service Manager',
    front: '/images/avatars/bile.jpg',
    back: '/images/employees/bile1.jpg',
  },
];

const Team = () => {
  return (
    <section>
      <h1>
        Team <span className="w-1/12"></span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 md:items-center xl:w-10/12 xl:mx-auto">
        {members.map((member, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Image
                  src={member.front}
                  width={50}
                  height={50}
                  layout="responsive"
                  alt={`${member.name}'s Avatar`}
                />
              </div>
              <div className="flip-card-back">
                <Image
                  src={member.back}
                  width={50}
                  height={50}
                  layout="responsive"
                  alt={`${member.name}'s Avatar`}
                />
              </div>
            </div>
            <div className="flip-card-description">
              <span className="title">{member.name}</span>
              <p>{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
