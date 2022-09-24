export interface riancarlosdev_I {
  executeCC(number: string):
    | false
    | {
        name: string;
        image: string;
      };
}

declare const riancarlosdev: riancarlosdev_I;

export { riancarlosdev };
