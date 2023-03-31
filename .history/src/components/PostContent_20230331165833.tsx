export default function PostContent() {
  return (
    <section className="bg-zinc-50 p-4 md:p-8 lg:px-16">
      <div className="flex items-center justify-between pb-6">
        <span className="bg-slate-200 text-slate-500 px-3 py-1 rounded-sm">
          {category}
        </span>
        <span className="text-slate-400 font-medium text-sm">
          {date.toString()}
        </span>
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-1">
        {title}
      </h1>
      <h3 className="text-lg md:text-xl text-black/60">{description}</h3>
      <div className="my-8 md:my-12 lg:my-16" />
      <MarkDownViewer content={content} />
    </section>
  );
}
