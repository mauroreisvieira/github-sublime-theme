rom fractions import gcd

class Fractions:
    """Some comment
    In a galaxy far, far away~"""
    def __init__(self, nom, denom):
        self.nom = nom
        self.denom = denom
        self.__reduce()

    def __reduce(self):
        GCD = gcd(self.nom, self.denom)
        self.nom, self.denom = self.nom // GCD, self.denom // GCD

    def __str__(self):
        if self.nom/self.denom >= 1:
            integer = self.nom // self.denom
            flt = Fractions(self.nom % self.denom, self.denom)
            if flt.nom == 0:
                return str(integer)
            else:
                return str(integer)+' '+str(flt)
        else:
            return str(self.nom)+'/'+str(self.denom)

    def __add__(self, other):
        nom = self.nom*other.denom + self.denom*other.nom
        denom = self.denom * other.denom
        return Fractions(nom, denom)

    def __sub__(self, other):
        nom = self.nom*other.denom - self.denom*other.nom
        denom = self.denom * other.denom
        return Fractions(nom, denom)

    def __truediv__(self, other):
        nom, denom = self.nom*other.denom, self.denom*other.nom
        return Fractions(nom, denom)

    def __mul__(self, other):
        nom, denom = self.nom * other.nom, self.denom * other.denom
        return Fractions(nom, denom)

    def __copy__(self):
        return Fractions(self.nom, self.denom)

    def __pow__(self, power, modulo=None):
        ret = self.__copy__()

        if power == 0:
            return Fractions(1,1)
        elif power < 0:
            for _ in range(abs(power)-1):
                ret *= self
            return Fractions(1,1)/ret
        else:
            for _ in range(abs(power)):
                ret *= self
            return ret

    def __eq__(self, other):
        return self.nom == other.nom and self.denom == other.denom

    def astuple(self):
        return self.nom, self.denom

    def destroy(self):
        self.nom = None
        self.denom = None

my_frac1 = Fractions(20, 30)
my_frac2 = Fractions(5, 173)

#my_frac1.destroy()

print(my_frac1)
print(my_frac1 == my_frac1.__copy__())
print(my_frac1 / (my_frac1 - my_frac2))
