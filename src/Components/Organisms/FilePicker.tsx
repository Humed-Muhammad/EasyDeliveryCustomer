import * as React from 'react'

import { StyleSheet } from 'react-native'
import DocumentPicker, {
    DirectoryPickerResponse,
    DocumentPickerResponse,
    isInProgress,
    types,
} from 'react-native-document-picker'
import { useEffect } from 'react'
import { IconPhoto } from '@Components/Atoms/Icons'

export default function FilePicker({ setImageUri }) {
    const [result, setResult] = React.useState<
        Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null
    >()

    useEffect(() => {
        console.log(JSON.stringify(result, null, 2))
    }, [result])

    const handleError = (err: unknown) => {
        if (DocumentPicker.isCancel(err)) {
            console.warn('cancelled')
            // User cancelled the picker, exit any dialogs or menus and move on
        } else if (isInProgress(err)) {
            console.warn('multiple pickers were opened, only the last will be considered')
        } else {
            throw err
        }
    }

    const pickProfileImage = async () => {
        try {
            const pickerResult = await DocumentPicker.pickSingle({
                presentationStyle: 'fullScreen',
                copyTo: 'cachesDirectory',
            })
            const imageResult = pickerResult
            setImageUri(imageResult.uri)
        } catch (e) {
            handleError(e)
        }
    }

    return (
        <IconPhoto onPress={() => pickProfileImage()} />
    )
}

