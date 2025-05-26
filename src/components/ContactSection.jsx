import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";

import { useToast } from "@/hooks/use-toast";


export const ContactSection = () => {
  const { toast } = useToast();


  const handleSubmit = (e) => {
    e.preventDefault();

    

    setTimeout(() => {
      toast({
        title: "Mensaje Enviado!",
        description: "Gracias por tu mensaje. Te responderé pronto..",
      });
      
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Enviame <span className="text-primary"> Mensaje</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            ¿Deseas contactarme para un empleo o proyecto nuevo? No dudes en comunicarte.
            Siempre estoy abierto a discutir nuevas oportunidades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Informacion del Contacto
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Correo</h4>
                  <a
                    href="mailto:argenis_america99@outlok.es"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    argenis_america99@outlok.es
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Celular</h4>
                  <a
                    href="tel:+5529709539"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +52-55-29-70-95-39
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Locacion</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Mexico,Estado de Mexico
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Contactame </h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://mx.linkedin.com/jobs" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>
                <a href="#" target="_blank">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};