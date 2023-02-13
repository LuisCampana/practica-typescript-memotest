export const Imagenes = [
  "https://cdn.icon-icons.com/icons2/1070/PNG/96/emperor-palpatine_icon-icons.com_76937.png",
  "https://cdn.icon-icons.com/icons2/1070/PNG/96/princess-leia_icon-icons.com_76940.png",
  "https://cdn.icon-icons.com/icons2/1070/PNG/96/luke-skywalker_icon-icons.com_76939.png",
  "https://cdn.icon-icons.com/icons2/1070/PNG/96/jabba-the-hutt_icon-icons.com_76950.png",
  "https://cdn.icon-icons.com/icons2/1070/PNG/96/darth-vader_icon-icons.com_76959.png",
  "https://cdn.icon-icons.com/icons2/1070/PNG/96/ewok_icon-icons.com_76943.png",
  "https://cdn.icon-icons.com/icons2/1070/PNG/96/chewbacca_icon-icons.com_76942.png",
  "https://cdn.icon-icons.com/icons2/1070/PNG/96/boba-fett_icon-icons.com_76958.png",
  "https://cdn.icon-icons.com/icons2/1070/PNG/96/r2d2_icon-icons.com_76952.png",
  "https://cdn.icon-icons.com/icons2/1328/PNG/96/clone4_87093.png",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);
