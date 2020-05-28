<?php

namespace foo;
use My\Full\Classname as Another;

class User
{
    private $name;
    private $gender;
    public $age;
    private $department = 'Mechanical';

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setGender($gender)
    {
        $this->gender = $gender;
    }

    public function getGender()
    {
        return $this->gender;
    }

    public function setDepartment($dep)
    {
        $this->department = $dep;
    }

    public function getDepartment()
    {
        return $this->department;
    }
}


class Course extends Controller
{
    public function destroy(Course $course)
    {
        try {
            if ($course->delete() ) {
                echo "Nice to know!";
            }
        } catch (TypeError $e) {
            echo $e->getMessage();
        }
    }
}
