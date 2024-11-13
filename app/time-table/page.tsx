'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHeader, TableRow, TableHead } from "@/components/ui/table";


type SubjectsData = {
    [key: string]: {
        [key: string]: {
            [key: string]: string[];
        };
    };
};
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const periods = ['9:30 - 10:30', '10:30 - 11:30', '11:30 - 12:30', '12:30 - 1:30', '1:30 - 2:30', '2:30 - 3:30', '3:30 - 4:30'];

const subjectsData: SubjectsData = {
    CSE: {
      A: {
        Monday: ['ES', 'BEE', 'EP', 'LUNCH', 'M1', 'M1', 'PPS'],
        Tuesday: ['EP', 'M1', 'MC', 'LUNCH', 'PPS LAB', 'PPS LAB', 'PPS LAB'],
        Wednesday: ['EGDP LAB', 'EGDP LAB', 'EGDP LAB', 'LUNCH', 'OC', 'PPS', 'SPORTS'],
        Thursday: ['BEE', 'ES', 'LIBRARY', 'LUNCH', 'EP LAB', 'EP LAB', 'EP LAB'],
        Friday: ['EP', 'PPS', 'M1', 'LUNCH', 'NAMAZ', 'BEE', 'ES'],
        Saturday: ['BEE LAB', 'BEE LAB', 'BEE LAB', 'LUNCH', 'EP', 'BEE', 'PPS'],
      },
      B: {
        Monday: ['BEE', 'EP', 'PPS', 'LUNCH', 'M1', 'M1', 'EP'],
        Tuesday: ['PPS LAB', 'PPS LAB', 'PPS LAB', 'LUNCH', 'ES', 'BEE', 'M1'],
        Wednesday: ['M1', 'EP', 'PPS', 'LUNCH', 'EP LAB', 'EP LAB', 'EP LAB'],
        Thursday: ['BEE LAB', 'BEE LAB', 'BEE LAB', 'LUNCH', 'PPS', 'PPS', 'BEE'],
        Friday: ['EP', 'PPS', 'M1', 'LUNCH', 'NAMAZ', 'BEE', 'ES'],
        Saturday: ['EP', 'BEE', 'ES', 'LUNCH', 'EGDP', 'EGDP', 'EGDP'],
      },
      C: {
        Monday: ['EP', 'BEE', 'PPS', 'LUNCH', 'EP LAB', 'EP LAB', 'EP LAB'],
        Tuesday: ['EGDP', 'EGDP', 'EGDP', 'LUNCH', 'EP', 'M1', 'PPS'],
        Wednesday: ['BEE LAB', 'BEE LAB', 'BEE LAB', 'LUNCH', 'PPS', 'M1', 'BEE'],
        Thursday: ['PPS', 'ES', 'BEE', 'LUNCH', 'PPS LAB', 'PPS LAB', 'PPS LAB'],
        Friday: ['BEE', 'EP', 'M1', 'LUNCH', 'NAMAZ', 'ES', 'PPS'],
        Saturday: ['EP', 'ES', 'M1', 'LUNCH', 'BEE', 'EP', 'M1'],
      },
      D: {
        Monday: ['PPS', 'BEE', 'EP', 'LUNCH', 'PPS LAB', 'PPS LAB', 'PPS LAB'],
        Tuesday: ['PPS', 'ES', 'M1', 'LUNCH', 'BEE', 'EP', 'PPS'],
        Wednesday: ['ES', 'BEE', 'M1', 'LUNCH', 'BEE LAB', 'BEE LAB', 'BEE LAB'],
        Thursday: ['EGDP', 'EGDP', 'EGDP', 'LUNCH', 'EP', 'M1', 'ES'],
        Friday: ['EP LAB', 'EP LAB', 'EP LAB', 'LUNCH', 'NAMAZ', 'EP', 'BEE'],
        Saturday: ['PPS', 'EP', 'M1', 'LUNCH', 'BEE', 'PPS', 'M1'],
      },
      E: {
        Monday: ['EP', 'PPS', 'M1', 'LUNCH', 'EP', 'BEE', 'PPS'],
        Tuesday: ['BEE', 'EP', 'ES', 'LUNCH', 'EGDP', 'EGDP', 'EGDP'],
        Wednesday: ['EP LAB', 'EP LAB', 'EP LAB', 'LUNCH', 'ES', 'EP', 'BEE'],
        Thursday: ['M1', 'M1', 'PPS', 'LUNCH', 'BEE LAB', 'BEE LAB', 'BEE LAB'],
        Friday: ['PPS', 'BEE', 'M1', 'LUNCH', 'NAMAZ', 'PPS', 'BEE'],
        Saturday: ['PPS LAB', 'PPS LAB', 'PPS LAB', 'LUNCH', 'EP', 'M1', 'ES'],
      },
      F: {
        Monday: ['EP', 'ES', 'BEE', 'LUNCH', 'M1', 'PPS', 'BEE'],
        Tuesday: ['BEE LAB', 'BEE LAB', 'BEE LAB', 'LUNCH', 'EP', 'BEE', 'ES'],
        Wednesday: ['BEE', 'PPS', 'EP', 'LUNCH', 'EGDP', 'EGDP', 'EGDP'],
        Thursday: ['PPS LAB', 'PPS LAB', 'PPS LAB', 'LUNCH', 'M1', 'M1', 'EP'],
        Friday: ['ES', 'M1', 'PPS', 'LUNCH', 'NAMAZ', 'BEE', 'PPS'],
        Saturday: ['M1', 'EPS', 'EP', 'LUNCH', 'EP LAB', 'EP LAB', 'EP LAB'],
      },
      G: {
        Monday: ['EP', 'PPS', 'BEE', 'LUNCH', 'ES', 'EP', 'EP'],
        Tuesday: ['EP LAB', 'EP LAB', 'EP LAB', 'LUNCH', 'BEE', 'M1', 'PPS'],
        Wednesday: ['M1', 'M1', 'ES', 'LUNCH', 'PPS LAB', 'PPS LAB', 'PPS LAB'],
        Thursday: ['PPS', 'EP', 'BEE', 'LUNCH', 'EGDP', 'EGDP', 'EGDP'],
        Friday: ['BEE LAB', 'BEE LAB', 'BEE LAB', 'LUNCH', 'NAMAZ', 'EP', 'BEE'],
        Saturday: ['PPS', 'M1', 'M1', 'LUNCH', 'BEE', 'ES', 'PPS']
          } 
    },
    CSD: {
      A: {
        Monday: ['Math', 'Science', 'English', 'History'],
        Tuesday: ['Biology', 'Physics', 'Math', 'Geography'],
        Wednesday: ['Math', 'Lab', 'English', 'History'],
        Thursday: ['Chemistry', 'PE', 'English', 'Geography'],
        Friday: ['History', 'Math', 'PE', 'Biology'],
        Saturday: ['English', 'Geography', 'Math', 'Physics'],
      },
      B: {
        Monday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Tuesday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub3', 'sub1', 'sub2'],
        Wednesday: ['sub1', 'sub1', 'sub1', 'LUNCH', 'sub2', 'sub3', 'sub3'],
        Thursday: ['sub3', 'sub1', 'sub2', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Friday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Saturday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub3', 'sub1', 'sub2'],
      },
    },
    CSM: {
      A: {
        Monday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Tuesday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub3', 'sub1', 'sub2'],
        Wednesday: ['sub1', 'sub1', 'sub1', 'LUNCH', 'sub2', 'sub3', 'sub3'],
        Thursday: ['sub3', 'sub1', 'sub2', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Friday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Saturday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub3', 'sub1', 'sub2'],
      },
      B: {
        Monday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Tuesday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub3', 'sub1', 'sub2'],
        Wednesday: ['sub1', 'sub1', 'sub1', 'LUNCH', 'sub2', 'sub3', 'sub3'],
        Thursday: ['sub3', 'sub1', 'sub2', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Friday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Saturday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub3', 'sub1', 'sub2'],
      },
      C: {
        Monday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Tuesday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub3', 'sub1', 'sub2'],
        Wednesday: ['sub1', 'sub1', 'sub1', 'LUNCH', 'sub2', 'sub3', 'sub3'],
        Thursday: ['sub3', 'sub1', 'sub2', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Friday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Saturday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub3', 'sub1', 'sub2'],
      },
    },
    AIML: {
      A: {
        Monday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Tuesday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub3', 'sub1', 'sub2'],
        Wednesday: ['sub1', 'sub1', 'sub1', 'LUNCH', 'sub2', 'sub3', 'sub3'],
        Thursday: ['sub3', 'sub1', 'sub2', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Friday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Saturday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub3', 'sub1', 'sub2'],
      },
      B: {
        Monday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Tuesday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub3', 'sub1', 'sub2'],
        Wednesday: ['sub1', 'sub1', 'sub1', 'LUNCH', 'sub2', 'sub3', 'sub3'],
        Thursday: ['sub3', 'sub1', 'sub2', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Friday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Saturday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub3', 'sub1', 'sub2'],
      },
    },
    IT: {
      A: {
        Monday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Tuesday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub3', 'sub1', 'sub2'],
        Wednesday: ['sub1', 'sub1', 'sub1', 'LUNCH', 'sub2', 'sub3', 'sub3'],
        Thursday: ['sub3', 'sub1', 'sub2', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Friday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Saturday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub3', 'sub1', 'sub2'],
      },
      B: {
        Monday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Tuesday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub3', 'sub1', 'sub2'],
        Wednesday: ['sub1', 'sub1', 'sub1', 'LUNCH', 'sub2', 'sub3', 'sub3'],
        Thursday: ['sub3', 'sub1', 'sub2', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Friday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Saturday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub3', 'sub1', 'sub2'],
      },
      C: {
        Monday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Tuesday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub3', 'sub1', 'sub2'],
        Wednesday: ['sub1', 'sub1', 'sub1', 'LUNCH', 'sub2', 'sub3', 'sub3'],
        Thursday: ['sub3', 'sub1', 'sub2', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Friday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Saturday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub3', 'sub1', 'sub2'],
      },
    },
    CE: {
      A: {
        Monday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Tuesday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub3', 'sub1', 'sub2'],
        Wednesday: ['sub1', 'sub1', 'sub1', 'LUNCH', 'sub2', 'sub3', 'sub3'],
        Thursday: ['sub3', 'sub1', 'sub2', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Friday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Saturday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub3', 'sub1', 'sub2'],
      },
    },
    MECH: {
      A: {
        Monday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Tuesday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub3', 'sub1', 'sub2'],
        Wednesday: ['sub1', 'sub1', 'sub1', 'LUNCH', 'sub2', 'sub3', 'sub3'],
        Thursday: ['sub3', 'sub1', 'sub2', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Friday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Saturday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub3', 'sub1', 'sub2'],
      },
    },
    ECE: {
      A: {
        Monday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Tuesday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub3', 'sub1', 'sub2'],
        Wednesday: ['sub1', 'sub1', 'sub1', 'LUNCH', 'sub2', 'sub3', 'sub3'],
        Thursday: ['sub3', 'sub1', 'sub2', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Friday: ['sub2', 'sub3', 'sub1', 'LUNCH', 'sub1', 'sub2', 'sub3'],
        Saturday: ['sub1', 'sub2', 'sub3', 'LUNCH', 'sub3', 'sub1', 'sub2'],
      },
    },
  };
  
  const YourComponent = () => {
    useEffect(() => {
        console.log(subjectsData);
    }, []); 

    return null; 
};

export default function TimetablePage() {
    const [department, setDepartment] = useState<string>('');
    const [section, setSection] = useState<string>('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const departments = ['CSE', 'CSD', 'CSM', 'AIML', 'IT', 'CE', 'MECH', 'ECE'] as const;

    
    type Department = typeof departments[number];

    
    const isDepartment = (value: string): value is Department => {
        return departments.includes(value as Department);
    };

    const sections = department && isDepartment(department) 
        ? Object.keys(subjectsData[department]) 
        : [];

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md z-10">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-semibold">
                        delen
                    </Link>
                </div>
            </header>

            <main className="pt-20 pb-12">
                <section className="container mx-auto px-4 py-8">
                    <motion.h1
                        className="text-4xl font-bold mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Time Table
                    </motion.h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div>
                            <Label htmlFor="department">Department</Label>
                            <Select onValueChange={setDepartment}>
                                <SelectTrigger id="department">
                                    <SelectValue placeholder="Select department" />
                                </SelectTrigger>
                                <SelectContent>
                                    {departments.map(dept => (
                                        <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label htmlFor="section">Section</Label>
                            <Select onValueChange={setSection} disabled={!department}>
                                <SelectTrigger id="section">
                                    <SelectValue placeholder="Select section" />
                                </SelectTrigger>
                                <SelectContent>
                                    {sections.map(sec => (
                                        <SelectItem key={sec} value={sec}>Section {sec}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {department && section && (
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Day / Time</TableHead>
                                        {periods.map((period, index) => (
                                            <TableHead key={index}>{period}</TableHead>
                                        ))}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {days.map((day) => (
                                        <TableRow key={day}>
                                            <TableCell className="font-medium">{day}</TableCell>
                                            {periods.map((_, periodIndex) => (
                                                <TableCell key={periodIndex}>
                                                    <div className="text-center font-medium">
                                                        {subjectsData[department]?.[section]?.[day]?.[periodIndex] ?? 'N/A'}
                                                    </div>
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    )}
                </section>
            </main>

            <footer className="bg-gray-100 py-8">
                <div className="container mx-auto px-4 text-center text-gray-600">
                    <p>&copy; {new Date().getFullYear()} delen. All rights reserved.</p>
                </div>
            </footer>
            <YourComponent /> {/* Render YourComponent here */}
        </div>
    );
}