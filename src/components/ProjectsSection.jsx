import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Infonavit",
    description: "El Instituto del Fondo Nacional de la Vivienda para los Trabajadores es un organismo público tripartita de México",
    image: "/projects/info.jpeg",
    tags: ["Java", "OpenText", "MicroServicios"],
    demoUrl: "#",
   
  },
  {
    id: 2,
    title: "Pemex",
    description:
      "Empresa estatal productora, transportista, refinadora y comercializadora de petróleo y gas natural mexicana.",
    image: "/projects/pemex.jpg",
    tags: ["Java", "OpenText", "MicroServicios"],
    demoUrl: "#",
   
  },
  {
    id: 3,
    title: "Inbursa",
    description:
      "El Grupo Financiero Inbursa es una sociedad financiera que a través de sus subsidiarias, proporciona servicios de banca y servicios relacionados en México.",
    image: "/projects/inbursa.png",
    tags: ["Java", "Oracle", "ETLs"],
    demoUrl: "#",
    
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
           <span className="text-primary"> Empresas </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Alguna de las empresas con las que he trabajado como desarrollador y algunas herramientas que use
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                  
                   
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Argenis05?tab=repositories"
          >
            Visita mi GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};