const Gallery = () => {
  const galleryImages = [
    {
      url: "images/DSC00706-min.jpg",
      title: "KONA CPS Inauguration Ceremony Event ",
    },
    {
      url: "images/DSC00547-min.jpg",
      title: "KONA CPS Inauguration Ceremony Prize Distribution",
    },
    {
      url: "images/original_1ad1b67e-de9f-4647-83d0-50fc2dc59254_PXL_20221008_090016473-min.jpg",
      title: "ACM ICPC Dhaka Regional Contest 2022",
    },
    {
      url: "images/PXL_20221007_115846737-min.jpg",
      title: "ACM ICPC Dhaka Regional Contest Friendly Chess Match",
    },
    // {
    //   url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
    //   title: "Workshop Session",
    // },
    // {
    //   url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    //   title: "Collaboration",
    // },
    // {
    //   url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    //   title: "Academic Event",
    // },
  ];

  return (
    <section id="gallery" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Gallery</h2>
          <div className="title-underline"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover-lift cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  console.error(`Failed to load image: ${image.title}`);
                  e.currentTarget.src = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-lg">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;