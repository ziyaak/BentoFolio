

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">BentoFolio</h1>
        <nav className="flex space-x-4">
          <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
          <a href="#portfolio" className="text-gray-600 hover:text-blue-600">Portfolio</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
        </nav>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-full">Let's Talk</button>
      </div>
    </header>
  );
}

export default Header;
