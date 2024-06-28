

export default function CoreConcept({title, image, description}) {
    return (
      <li>
        <img src={image} alt={description} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }