import Countries from './components/Countries';
import Search from './components/Search';

export default function Home() {
  return (
    <main className="borb min-h-screen w-full flex-1 px-10 pb-20">
      <Search />
      <Countries />
    </main>
  );
}
