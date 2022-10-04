/**
 * This is the  MrCoxallStack Class madule
 * By:      Seti Ngabo
 * Version: 1.0
 * Since:   2022-10-03
 */

class MrCoxallStack {
  stack: number[] = []

  Push(pushedNumber: number): void {
    this.stack.push(pushedNumber)
  }

  ShowStack(): void {
    console.log(this.stack)
  }
}

export = MrCoxallStack
