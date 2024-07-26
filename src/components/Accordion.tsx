import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import DetailsAccordion from "./DetailsAccordion";

const skillsAppliedDescription = [
  {
    topic: "Armazenamento local & estado global:",
    description:
      "Armazeno as informações dos itens do carrinho e dos favoritos do usuário logado no armazenamento local. Na renderização inicial, se o usuário estiver logado, recupero seu e-mail para obter todos os dados associados a ele a partir do armazenamento local. Em seguida, compartilho esses dados em todo o aplicativo por meio de um estado global declarado na API do AppContext para gerar e manipular elementos, comparando os dados armazenados nesses estados com o arquivo Catalog.js.",
    details: [
      "No primeiro carregamento, o aplicativo verifica se há um carrinho no armazenamento local (imitando um servidor). Se sim, ele verifica se há um carrinho atribuído ao e-mail do usuário atual. Se sim, ele atribui um estado a ele. Se não, cria um novo carrinho com o e-mail do usuário e o atribui ao estado do carrinho e ao armazenamento local. Se não houver carrinho no armazenamento local, ele cria um novo array com o formato correto e atribui tanto um novo estado quanto um novo armazenamento local a ele. A mesma lógica é aplicada para definir os itens favoritos do usuário atual.",
      'Os botões "Add to Cart" e "Add to Favorites" também têm sua funcionalidade vinculada a esses estados globais e ao armazenamento local. Quando o usuário clica em um desses botões, eles verificam se o item já está no carrinho/lista de favoritos. Se sim, eles aumentam sua quantidade ou o removem (no caso da lista de favoritos). Se não, eles adicionam o item, que é o produto, à lista correspondente.',
      'Na página de receitas, verifico se já há um item em alta no armazenamento local. Se sim, eu o recupero e o exibo; caso contrário, busco três receitas aleatórias, configuro o armazenamento local e as exibo. Implementei isso para reduzir chamadas à API Spoonacular e imitar como um servidor teria uma seção "em alta" fixa, exibindo as mesmas receitas para aquela semana ou mês, dependendo da decisão da equipe.',
      "Também armazenei o número total de itens no carrinho em um estado global para que eu possa acessá-lo no componente do carrinho e exibí-lo.",
    ],
  },
  {
    topic: "Fetch API:",
    description:
      "Eu realizo requisições à API Spoonacular para buscar e exibir receitas com base na entrada do usuário. Também uso o ApiLoader da API do Google Maps, que busca dados do seu endpoint. Com os dados recuperados, eu gero e manipulo o mapa integrado com base nos estados.",
    details: [
      "Na página de receitas, durante o carregamento inicial, o aplicativo recupera receitas em alta do armazenamento local ou faz uma requisição à API Spoonacular para obter três receitas aleatórias se não houver dados locais disponíveis. Clicar em qualquer um dos cards gerados a partir desses resultados redireciona o usuário para uma nova página com informações relevantes sobre a respectiva receita. Também incorporei uma barra de pesquisa que faz requisições para buscar receitas com base nos ingredientes. Ela exibe todos os resultados correspondentes e, semelhante à seção de receitas em alta, clicar nos cards gerados leva o usuário à página da receita apropriada.",
      "Na página Nossas Lojas, um mapa integrado do Google é gerado realizando uma requisição ao endpoint do Google Maps. Incluí 14 lojas fictícias, permitindo que os usuários interajam e acessem informações como nome, endereço, horário de funcionamento e mais.",
    ],
  },
  {
    topic: "Validação de formulário customizada:",
    description:
      "Apliquei uma combinação de técnicas de validação no lado do cliente para validar os campos de entrada do formulário em tempo real, garantindo que os dados enviados correspondam aos requisitos estabelecidos nos diversos controles do formulário.",
    details: [
      "No primeiro envio, o aplicativo verifica se os dados de entrada passam nos testes definidos para cada campo, incluindo nome, e-mail, upload de PDF, entre outros. Se algum campo não atender aos critérios, mensagens de erro são exibidas abaixo do respectivo campo, fornecendo dicas sobre o que precisa ser corrigido. Posteriormente, o aplicativo inicia a verificação em tempo real conforme o usuário digita em cada campo, melhorando a experiência geral do usuário.",
    ],
  },
  {
    topic: "Acessibilidade:",
    description:
      "Associei rótulos a cada controle de formulário; forneci instruções claras, mensagens de erro e notificações para ajudar os usuários a preencher formulários; usei WAI-ARIA para fornecer informações sobre função e estado para widgets personalizados, como acordeões e botões personalizados; garanti que todos os elementos interativos sejam acessíveis por teclado, facilitando a navegação, inclusive entre acordeões, gavetas e pop-ups; adicionei textos descritivos para imagens significativas; e mais.",
    details: [
      "Adicionei um botão de pular no início de cada carrossel da página inicial que salta para o próximo.",
      "Melhorei a experiência do usuário bloqueando a iteração com a tecla TAB fora do menu da barra de navegação, do carrinho e do pop-up de login. Também adicionei um listener de evento que fecha esses elementos quando a tecla ESC é pressionada.",
      "Forneci texto alternativo significativo para cada imagem no slider hero da página inicial.",
      "Aumentei a acessibilidade com funções ARIA apropriadas, incluindo indicador de estado para acordeões, funções para divs e aria-label para elementos relevantes, entre outros.",
      'Incluí um botão de "Ir para o Topo" em desktops, visível apenas quando uma página excede um comprimento especificado e a posição de rolagem está acima da metade da altura total.',
    ],
  },
  {
    topic: "Design responsivo:",
    description:
      "Adaptei a exibição para diferentes estados de zoom e tamanhos de viewport, como em desktops, dispositivos móveis e tablets.",
    details: [
      "Usei consultas de mídia do Tailwind para aplicar estilos diferentes com base na largura da tela.",
      "O Next.js fornece otimização automática de imagens, o que significa que otimiza imagens para desempenho por padrão. Ele gera vários tamanhos de cada imagem e escolhe o tamanho apropriado com base no dispositivo do usuário, tamanho da tela e resolução. Isso pode melhorar significativamente os tempos de carregamento da página.",
      "Utilizei Flexbox ou Grid Layout para criar layouts flexíveis e responsivos.",
      "Usei o estado e os métodos de ciclo de vida do React para renderizar condicionalmente componentes ou elementos com base no tamanho da tela, proporcionando flexibilidade para estilizar e otimizar a interface do usuário para diferentes dispositivos.",
    ],
  },
  {
    topic: "Animações:",
    description:
      "Criei animações suaves usando a biblioteca framer-motion, incluindo desvanecimento de opacidade, imagens de carrossel deslizantes, elementos móveis nos eixos x e y e animações para crescimento e encolhimento de elementos.",
    details: [
      "A mini-navbar acima da principal apresenta uma aparência suave com uma animação de fade-in escalonada para cada item de navegação.",
      "As sugestões da barra de pesquisa principal usam uma animação escalonada semelhante para uma entrada sequencial interessante.",
      "Cada link da navbar tem uma animação personalizada de fundo ao passar o mouse.",
      "A gaveta do carrinho tem uma animação de deslizamento sincronizada com a animação de fade-in da sobreposição cinza.",
      "O menu da navbar usa animações ao longo do eixo x para interações de navegação suaves.",
      "Apliquei animação no eixo x para animações de deslizamento no componente do slider hero.",
      "Os carrosséis na página inicial ativam animações apenas quando entram no viewport.",
      "Nas páginas Chefs e Delivery Rotisserie, uma combinação de animações de caminho de recorte, tradução e escala cria um efeito visualmente atraente.",
    ],
  },
  {
    topic: "Carrossel personalizado:",
    description:
      "Eu criei um carrossel responsivo para a página inicial do zero.",
    details: [
      "Eu filtro o catálogo para criar um carrossel com produtos pertencentes à seção específica. Usando useEffect, defino dinamicamente a largura do card com base em media queries, incorporando a lógica em um listener de evento de redimensionamento para melhorar a responsividade.",
      "Se o usuário estiver no primeiro ou último card do carrossel e clicar na seta esquerda ou direita para se mover, uma cópia do carrossel é renderizada no início ou no final, respectivamente. A barra de rolagem é então movida nos bastidores para o mesmo card que estava sendo exibido, mas não da cópia, criando a ilusão de um slider/carrossel infinito.",
    ],
  },
];

const Accordion = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [detailsExpandedItems, setDetailsExpandedItems] = useState<number[]>([]);
	  
	//The id represents the unique identifier of the accordion item you want to toggle
	const toggleAccordion = (id: number) => {
		//This is an if statement that checks whether the id is already present in the expandedItems array
		if (expandedItems.includes(id)) {
			//If the id is already in the expandedItems array (indicating that the accordion item is expanded), this line of code removes the id from the expandedItems array by using the filter method. It creates a new array with all IDs except the one that matches the id passed as an argument. This effectively collapses the accordion item.
			setExpandedItems(expandedItems.filter((item) => item !== id));
			
			//closes any more details... that is open of the respective accordion
			if (id === 0) {
				setDetailsExpandedItems(
					detailsExpandedItems.filter((item) => item !== -1)
				);
			}
			if (id === 1) {
				if (detailsExpandedItems.includes(-1)) {
					setDetailsExpandedItems([-1])
				} else {
					setDetailsExpandedItems([])
				}
			}

		} else {
			setExpandedItems([...expandedItems, id]);
		}
	};

	const toggleDetails = (id: number) => {
    if (detailsExpandedItems.includes(id)) {
      setDetailsExpandedItems(detailsExpandedItems.filter((item) => item !== id));
    } else {
      setDetailsExpandedItems([...detailsExpandedItems, id]);
    }
  };

  return (
    <div className="w-full flex flex-col tracking-wide">
      {/* how it works accordion */}
      <button
        role="accordion"
        aria-expanded={expandedItems.includes(0)}
        onClick={() => toggleAccordion(0)}
        className="py-4 mx-4 grow outline-none border-b dark:border-neutral-700 border-neutral-300 transition duration-400 ease-in flex justify-start items-center leading-6 text-base sm:whitespace-normal tracking-wide"
      >
        Como funciona
        <p className="ml-1.5">{expandedItems.includes(0) ? "-" : "+"}</p>
      </button>
      <AnimatePresence>
        {expandedItems.includes(0) && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <ul
              className={`px-8 py-4 font-[350] whitespace-normal text-base text-neutral-600 dark:text-green-400 mx-4`}
            >
              <li className={`space-y-2`}>
                <p className="text-thin leading-5 text-neutral-700 dark:text-neutral-100">
                  Utilizei o arquivo Catalog.js, uma matriz de objetos que
                  contém todas as seções, onde cada seção armazena informações
                  sobre os respectivos produtos, como nome, preço, imagem e
                  categoria. Isso me permitiu propagar dados por todo o
                  aplicativo, gerando dinamicamente vários componentes,
                  incluindo uma barra de pesquisa, carrosséis, páginas de
                  produtos e outros elementos essenciais.
                </p>

                <button
                  aria-label="expand details"
                  role="accordion"
                  aria-expanded={detailsExpandedItems.includes(-1)}
                  onClick={() => toggleDetails(-1)}
                  className={`grow outline-none transition duration-400 ease-in flex justify-start items-center leading-6 sm:whitespace-normal
				 dark:text-stone-400 text-stone-600 text-[0.93rem]`}
                >
                  mais detalhes
                  <p
                    className={`ml-1 ${
                      detailsExpandedItems.includes(-1) ? "" : null
                    }`}
                  >
                    {detailsExpandedItems.includes(-1) ? "-" : "+"}
                  </p>
                </button>
                {detailsExpandedItems.includes(-1) && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p
                      className={`font-[350] whitespace-normal flex flex-col gap-1.5 text-thin leading-5 text-[0.93rem] text-neutral-700 dark:text-neutral-100 mx-4`}
                    >
                      <span>
                        .À medida que o usuário digita na barra de pesquisa, o
                        aplicativo itera sobre a matriz catálogo para encontrar
                        todos os produtos que correspondem à entrada do usuário.
                        Os resultados são exibidos abaixo como sugestões de
                        links que redirecionam o usuário para a respectiva
                        página do produto ao clicar. Alternativamente, se o
                        usuário optar por clicar no botão de pesquisa, o
                        aplicativo navega para uma nova página exibindo todos os
                        produtos correspondentes, verificando as palavras
                        digitadas em relação à matriz de palavras de busca
                        anexada a cada produto no catálogo. Esta página inclui
                        opções para filtrar os resultados por preço e categoria,
                        com filtros gerados dinamicamente a partir dos
                        resultados da pesquisa para capturar os preços mais
                        baixos e mais altos e extrair suas respectivas
                        categorias.
                      </span>
                      <span>
                        .Percorrendo o catálogo, é gerado uma lista de seções no
                        menu da barra de navegação, cada uma contendo links para
                        todas as páginas de produtos dentro dessa seção.
                      </span>
                      <span>
                        .Da mesma forma, é gerado carrosséis na página inicial
                        iterando sobre o catálogo e recuperando informações de
                        cada produto.
                      </span>
                    </p>
                  </motion.div>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* skills applied accordion */}
      <button
        role="accordion"
        aria-expanded={expandedItems.includes(1)}
        onClick={() => toggleAccordion(1)}
        className="py-4 mx-4 grow outline-none border-b dark:border-neutral-700 border-neutral-300 transition duration-400 ease-in flex justify-start items-center leading-6 text-base sm:whitespace-normal tracking-wide"
      >
        Conhecimentos aplicados
        <p className="ml-1.5">{expandedItems.includes(1) ? "-" : "+"}</p>
      </button>
      <AnimatePresence>
        {expandedItems.includes(1) && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <ul
              className={`px-8 pt-4 font-[350] whitespace-normal text-base text-neutral-600 dark:text-green-400 mx-4 list-disc`}
            >
              {skillsAppliedDescription.map((text, index) => {
                return (
                  <li key={`description+${index}`} className={`space-y-2 mb-4`}>
                    <h4>{text.topic}</h4>
                    <p className="text-thin leading-5 text-neutral-700 dark:text-neutral-100">
                      {text.description}
                    </p>
                    <DetailsAccordion
                      id={index}
                      isExpanded={detailsExpandedItems.includes(index)}
                      toggleAccordion={toggleDetails}
                      details={text.details}
                    />
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
