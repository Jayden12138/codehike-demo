import { data, list, statement } from '../src/simpleExample'
import { describe, it, expect } from 'bun:test'

describe('simpleExample', () => {
	it('statement', () => {
		expect(statement(list[0], data)).toEqual(
			`Statement for BigCo
Amount owed is $1,730.00
You earned 47 credits
`
		)
	})
})
