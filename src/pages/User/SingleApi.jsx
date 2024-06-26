import { Input } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import ApiDocs from '../../components/ApiDocs'

const SingleApi = () => {


    const location = useLocation()
    return (
        <div className='p-10'>
            <div className='border-[1px] rounded-lg overflow-hidden border-primary p-10'>
                <h4 className='font-medium text-gray-700 mb-5'>API Keys</h4>
                <p className=' text-primary font-medium pb-3'>Api Name : {location?.state?.apiName || '...'}</p>
                <Input
                    variant='filled'
                    isReadOnly={true}
                    border={"1px"}
                    fontWeight={'500'}
                    color={'blue'}
                    borderColor={"blue"}
                    colorScheme='blue'
                    defaultValue={location?.state?.apiKey || '...'}
                />
            </div>
            <br /><br />
            <ApiDocs />
         
        </div>
    )
}

export default SingleApi
