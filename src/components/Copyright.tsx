export default function Copyright() {
  return (
    <>
      <p>&copy; {(new Date).getFullYear()}</p>
      <style jsx>
        {`
          p {
            font-size: 0.75rem;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}
