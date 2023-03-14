import About from '../assets/img/About us.png'
import Main from '../assets/img/Main.png'
import Products from './Products'
const callouts = [
  
  {
    name: 'Productos',
    description: '¿Quieres saber más al respecto de nuestra arena? Sus beneficios le encantarán a ti y a tu gatito! Comunicate con nosotros através de whatsapp o bien por nuestras redes sociales.',
    imageSrc: Main,
    imageAlt: '',
    href: 'https://wa.me/c/5213315694973',
  },
  {
    name: 'Sobre nosotros',
    description: 'Escribenos por whatsapp para realizar tu pedido click en la imagen del catalogo de abajo.',
    imageSrc: About,
    imageAlt: '',
    href: 'https://wa.me/c/5213315694973',
  },
 
]

export default function Example() {
  return (

    <div className="bg-black-100">
      <div className="px-4 sm:px-6 lg:xpx-8">
        <div className="py-4 sm:py-4 lg:max-w-none lg:py-16">
          <h2 className="text-2xl font-bold text-white-900">Somos una empresa 100% Mexicana fabricante de productos para mascotas que marque una diferenciación en el mercado con el objetivo de cumplir las expectativas de nuestros clientes a un precio justo.</h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-white-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-white-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Products></Products>
    </div>
    
  )
}
