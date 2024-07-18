import React from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { useRouter } from "next/navigation";
import Link from 'next/link';


function SeeOrder() {
  return (
    <>
        <Card>
            <CardHeader>
                <CardTitle className="text-center">
                    Table 1
                </CardTitle>
                <CardDescription className="text-center">
                    order of table 1
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button>
                <Link href="/Dashboard/SeeOrder/table1">
                        check order
                    </Link>
                </Button>
            </CardFooter>
        </Card>

        <br></br>

        <Card>
            <CardHeader>
                <CardTitle className="text-center">
                    Table 2
                </CardTitle>
                <CardDescription className="text-center">
                    order of table 2
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button>
                    <Link href="/Dashboard/SeeOrder/table2">
                        check order
                    </Link>
                </Button>
            </CardFooter>
        </Card>

        <br></br>

        <Card>
            <CardHeader>
                <CardTitle className="text-center">
                    Table 3
                </CardTitle>
                <CardDescription className="text-center">
                    order of table 3
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button>
                <Link href="/Dashboard/SeeOrder/table3">
                        check order
                    </Link>
                </Button>
            </CardFooter>
        </Card>

        <br></br>

        <Card>
            <CardHeader>
                <CardTitle className="text-center">
                    Table 4
                </CardTitle>
                <CardDescription className="text-center">
                    order of table 4
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button>
                <Link href="/Dashboard/SeeOrder/table4">
                        check order
                    </Link>
                </Button>
            </CardFooter>
        </Card>

        <br></br>

        <Card>
            <CardHeader>
                <CardTitle className="text-center">
                    Table 5
                </CardTitle>
                <CardDescription className="text-center">
                    order of table 5
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button>
                <Link href="/Dashboard/SeeOrder/table4">
                        check order
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    </>
  )
}

export default SeeOrder
