'use client'

import { useMemo } from 'react'
import { SingleValue } from 'react-select'
import CreateableSelect from 'react-select/creatable'

type Props = {
	onChange: (value?: string) => void
	onCreate?: (value: string) => void
	options?: { label: string; value: string }[]
	value?: string | null | undefined
	disabled?: boolean
	placeholder?: string
}

export function Select({
	value,
	onChange,
	disabled,
	onCreate,
	options = [],
	placeholder,
}: Props) {
	function onSelect(option: SingleValue<{ label: string; value: string }>) {
		onChange(option?.value)
	}

	const formattedValue = useMemo(() => {
		return options.find((option) => option.value === value)
	}, [options, value])

	return (
		<CreateableSelect
			placeholder={placeholder}
			className="text-sm h-10"
			styles={{
				control: (base) => ({
					...base,
					borderColor: '#E2E8F0',
					':hover': {
						borderColor: '#E2E8F0',
					},
				}),
			}}
			value={formattedValue}
			onChange={onSelect}
			options={options}
			onCreateOption={onCreate}
			isDisabled={disabled}
		/>
	)
}
