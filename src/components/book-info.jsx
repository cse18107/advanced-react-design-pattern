export const BookInfo = ({ books }) => {
  const { cover, description, originalTitle, pages, title } = books || {};

  return books ? (
    <div className="w-[20rem]  p-3 flex flex-col items-start border-[2px] border-[black]">
      <img className="w-[18rem] pb-2" src={cover} alt="cover" />
      <h1 className="font-[700] text-[1.3rem] pb-2">{title}</h1>
      <h3 className="font-[500] text-[1rem] pb-2">{originalTitle}</h3>
      <h4 className="font-[300] text-[0.9rem] pb-2">{description}</h4>
      <p className="font-[300] text-[0.9rem] pb-2">Pages: {pages}</p>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};
