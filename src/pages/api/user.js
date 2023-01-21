export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export const config = {
  type: "experimental-background",
};
