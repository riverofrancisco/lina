import { About } from '@/utils/keys/es.json'


export default function AboutPage() {

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gray-100">
      <section className="max-w-2xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {About.Title}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          ¡Hola! Soy Lina, una cantante apasionada por transmitir emociones a
          través de mis canciones. Con influencias de diversos géneros
          musicales, creo experiencias únicas para quienes escuchan mi música.
          Bienvenidos a mi mundo melódico, donde cada nota cuenta una historia.
        </p>
        <div className="flex justify-center">
          <img
            src="/lina-profile.jpg"
            alt="Foto de Lina"
            className="rounded-full w-48 h-48 object-cover shadow-lg"
          />
        </div>
      </section>
    </main>
  );
}
