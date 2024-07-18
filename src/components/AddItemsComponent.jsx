import React from 'react'
import { Card, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'

function AddItemsComponent() {
  return (
    <div>
      <Card>
        <CardHeader>
            <CardTitle className="text-center">
                Roti 
            </CardTitle>
        </CardHeader>

        <CardFooter>
            <Button>
                <Link href="/Dashboard/AddItems/Roti">
                    Add
                </Link>
            </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle className="text-center">
              Biryani 
            </CardTitle>
        </CardHeader>

        <CardFooter>
            <Button>
                <Link href="/Dashboard/AddItems/Biryani">
                    Add
                </Link>
            </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle className="text-center">
              Veg Special 
            </CardTitle>
        </CardHeader>

        <CardFooter>
            <Button>
                <Link href="/Dashboard/AddItems/VegSpecial">
                    Add
                </Link>
            </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle className="text-center">
              Thali 
            </CardTitle>
        </CardHeader>

        <CardFooter>
            <Button>
                <Link href="/Dashboard/AddItems/Thali">
                    Add
                </Link>
            </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default AddItemsComponent
