"use client"
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';

function Edit({ queryTitle }) {
    return (
        <div>
        <Link href={`/dashboard/manage/${queryTitle}`} passHref>
          <Button variant="outline-secondary" size="sm">
            <Pencil className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    )
}

export default Edit