/**
 * This code runs MrCoxallStack.
 * By:      Seti Ngabo
 * Version: 1.0
 * Since:   2022-10-03
 */

import MrCoxallStack from './MrCoxallStack'
import promptSync from 'prompt-sync'

// prompt
const prompt = promptSync()
const ownStack = new MrCoxallStack()

// Input & output
const userInput = Number(prompt('Enter a number: '))
ownStack.Push(userInput)

// Output
ownStack.ShowStack()

console.log('\nDone.')
