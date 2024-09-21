const car2 = new Proxy({"src":"/_astro/corrientes.W0le-c1I.jpg","width":4000,"height":3000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/public/media/pictures/carousel/corrientes.jpg";
							}
							
							return target[name];
						}
					});

export { car2 as c };
