import { FaGithub, FaGitlab } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-4 border-t-2">
      <div className="bottom-0 flex items-center justify-center gap-4 px-4 py-6 lg:container sm:px-6 md:px-8 lg:mx-auto xl:w-3/4">
        <a
          href="https://github.com/SimonHazard"
          className="text-3xl text-creme-700 hover:text-creme-900"
        >
          <FaGithub />
        </a>
        <a
          href="https://gitlab.com/SimonHazard"
          className="text-3xl text-creme-700 hover:text-creme-900"
        >
          <FaGitlab />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
