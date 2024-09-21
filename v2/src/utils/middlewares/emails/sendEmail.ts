export const EmailSender = async () => {
  const res = await fetch("api/send-email", { method: "POST" });
  const data = res.json();
  console.log(data);
};
