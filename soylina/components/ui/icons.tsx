import { IconArrowBackUp, IconBadge4k } from "@tabler/icons-react";

const Icons = [
  { name: "back", Icon: <IconArrowBackUp stroke={1} /> },
  {
    name: "more",
    Icon: <IconBadge4k stroke={1} />,
  },
];

export function Icon(iconName: string) {
  return <div>{Icons[iconName].Icon}</div>;
}
