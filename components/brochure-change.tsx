import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const metadata = {
  title: "A Mudança Que Você Precisa",
  description: "Uma mensagem especial para você",
};

export default function BrochureChange() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="min-w-lg">
        <header className="text-center mb-6">
          <h1 className="text-xl font-bold text-gray-800">
            A Mudança Que Você Precisa
          </h1>
          <p className="text-gray-500 italic">
            Uma mensagem especial para você
          </p>
        </header>

        <main className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <p>
              Já se sentiu perdido, sem direção, ou sem esperança? A vida, às
              vezes, pode ser desafiadora, mas quero compartilhar algo que pode
              mudar completamente a sua realidade.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800">
              O Que é a Salvação?
            </h2>
            <p>
              Salvação é ser resgatado do pecado e da morte eterna, recebendo
              uma nova vida cheia de propósito e paz. É a chance de recomeçar,
              deixando para trás as amarras do passado.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800">
              Por Que Jesus?
            </h2>
            <p>
              Jesus, o Filho de Deus, veio ao mundo para nos salvar. Ele viveu
              sem falhas, sacrificou-se por nós na cruz e ressuscitou, abrindo o
              caminho para a vida eterna. Ele é o único que pode nos reconectar
              com Deus.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800">
              Como Receber a Salvação?
            </h2>
            <ol className="list-decimal list-inside pl-4 space-y-2">
              <li>
                Reconheça que precisa de um Salvador. Todos nós somos
                imperfeitos.
              </li>
              <li>
                Creia que Jesus é o Filho de Deus e que Ele morreu e ressuscitou
                por você.
              </li>
              <li>
                Convide Jesus para entrar em seu coração e transformar sua vida.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800">
              Versículos Que Transformam
            </h2>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="italic text-gray-600">
                &quot;Porque Deus amou o mundo de tal maneira que deu o Seu
                Filho unigênito, para que todo aquele que Nele crê não pereça,
                mas tenha a vida eterna.&quot; (João 3:16)
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md mt-4">
              <p className="italic text-gray-600">
                &quot;Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai,
                senão por mim.&quot; (João 14:6)
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md mt-4">
              <p className="italic text-gray-600">
                &quot;Pois o salário do pecado é a morte, mas o dom gratuito de
                Deus é a vida eterna em Cristo Jesus, nosso Senhor.&quot;
                (Romanos 6:23)
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800">
              Depois da Salvação
            </h2>
            <p>
              Ao aceitar Jesus, sua jornada será transformada. O Espírito Santo
              te guiará, te fortalecerá e dará um propósito renovado para a sua
              vida.
            </p>
          </section>

          <section>
            <p>
              Não deixe para depois. Jesus está pronto para agir em sua vida a
              partir agora. Tudo o que Ele precisa é que você abra seu coração e
              confesse que é um pecador, pedindo perdão e que necessita da
              presença dele em sua vida.
            </p>
          </section>
        </main>

        <footer className="mt-6 text-center">
          <a
            href="https://wa.me/5551991306543"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 m-auto mb-8 border py-2 px-6 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-10  0">
              <Avatar className="transform hover:scale-110 transition-transform duration-300">
                <AvatarImage
                  src="/foto.jpg"
                  alt="Foto"
                  className="object-cover object-top"
                />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-gray-700">Preciso conversar!</p>
              </div>
            </button>
          </a>
          <p className="text-gray-500 text-sm">
            Desenvolvido pela Mocidade da Igreja Batista Bíblica Fundamentalista
            de Canoas.
          </p>

          {/* Área de Contribuição */}
          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <p className="text-gray-600 mt-4">Visite nossa igreja:</p>
            <a
              href="https://www.google.com/maps/dir//R.+Benjamin+Franklin,+73+-+Harmonia,+Canoas+-+RS,+92310-380/@-29.9167911,-51.2361126,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x95197ab15567a83b:0xd5aba15b41c1ccf8!2m2!1d-51.1949131!2d-29.9168719!3e0?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Rua Benjamin Franklin, 73 - Harmonia, Canoas
            </a>

            <p className="text-gray-600 mt-4">Horários de cultos:</p>
            <ul className="text-gray-600 mt-2">
              <li>Domingo: Escola Bíblica Dominical às 9h e Culto de Adoração às 19h30.</li>
              <li>Quarta: Culto de Oração às 19h30.</li>
            </ul>

          </div>
        </footer>
      </div>
    </div>
  );
}
