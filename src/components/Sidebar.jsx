export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white text-black p-4 fixed top-0 left-0">
      <a href="/" class="block w-32">
        <img src="/myjobs/brand.svg" alt="logo" className="w-full h-auto mb-6"></img>
      </a>
      <ul className="space-y-4">
        <li><a href="#about" className="font-medium hover:underline !text-blue-400">About Me</a></li>
        <li><a href="#projects" className="hover:underline !text-blue-400">Projects</a></li>
        <li><a href="#educations" className="hover:underline !text-blue-400">Educations</a></li>
        <li><a href="#jobs" className="hover:underline !text-blue-400">Jobs</a></li>
      </ul>
    </div>
  );
}
