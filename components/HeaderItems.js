export default function HeaderItems({ title, Icon }) {
  return (
    <div className="flex flex-col items-center cursor-pointer mt-2 sm:mr-6 group w-12 hover:text-white">
      <Icon className="h-6 mb-1 group-hover:animate-bounce" />
      <p className="text-sm opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}
