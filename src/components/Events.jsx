import Event1 from '../assets/img/Event1.png'
import Event2 from '../assets/img/Event2.png'
import Main from '../assets/img/Main.png'
import Products from './Products'
const callouts = [
  {
    name: 'Jacaranto Bazar',
    description: 'Mercado local para impulsar a emprendedores y emprendedoras',
    imageSrc: Event2,
    imageAlt: '',
    href: 'https://goo.gl/maps/vZUjd8q6LaejitWW9',
  },
 
  {
    name: 'Productos',
    description: '',
    imageSrc: Main,
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Festival de las arcillas',
    description: 'Primer festival de las arcillas donde habrá talleres, pláticas, música, bazar de emprendedores y rifas todo el día.',
    imageSrc: Event1,
    imageAlt: '',
    href: 'https://goo.gl/maps/MrrShKNSy2kJx4QG7',
  },
 
]

export default function Example() {
  return (

    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Próximos eventos:</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Products></Products>
    </div>
    
  )
}
