import Images from "./Images";

export default function Services() {
  return (
    <>
      <section
        className=" bg-gray-100 max-w-7xl ml-auto mr-auto mt-20 mb-20 p-5"
        id="services"
      >
        <div className="flex flex-col ml-5">
          <h3
            className="text-black text-2xl font-bold mt-5
            "
          >
            Services
          </h3>
          <p className="text-xl mt-5">
            Vitae tortor condimentum lacinia quis vel eros donec ac odio. Tellus
            elementum sagittis vitae et leo duis. Nunc non blandit massa enim
            nec dui nunc mattis. Eget mauris pharetra et ultrices neque ornare
            aenean euismod. Sit amet nisl purus in mollis nunc. Nulla facilisi
            cras fermentum odio eu feugiat pretium. Eu feugiat pretium nibh
            ipsum consequat nisl.
          </p>{" "}
          <br />
          <p className="text-xl">
            At elementum eu facilisis sed odio morbi. Adipiscing elit ut aliquam
            purus sit. Feugiat sed lectus vestibulum mattis. Gravida cum sociis
            natoque penatibus et magnis dis parturient montes. Tincidunt
            praesent semper feugiat nibh. Pellentesque elit ullamcorper
            dignissim cras tincidunt. Nibh tellus molestie nunc non blandit
            massa enim. Gravida cum sociis natoque penatibus et magnis.
          </p>
        </div>

        <Images />
      </section>
    </>
  );
}