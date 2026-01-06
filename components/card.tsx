type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  return (
    <div className="border p-4">
      <h2 className="font-medium">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
