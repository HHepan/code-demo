/**
 * 学生
 */
export class Student {
  id: number | undefined;
  name: string | undefined;
  sno: string | undefined;
  constructor(data = {} as {
    id?: number
    name?: string,
    sno?: string,
  } as Student) {
    this.id = data.id;
    this.name = data.name;
    this.sno = data.sno;
  }
}
