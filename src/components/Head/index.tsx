interface IHeadProps {
  title: string;
  desc: string;
}

const Head = ({ title, desc }: IHeadProps) => {
  return (
    <div className="mb-6">
      <h2 className="mb-2 text-2xl font-bold text-denim lg:text-3xl">{title}</h2>
      <p className="font-light text-grey">{desc}</p>
    </div>
  );
};

export default Head;
