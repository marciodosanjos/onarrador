export default function HighlightBox(props: { title: string; description: string }) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
    </div>
  );
}
