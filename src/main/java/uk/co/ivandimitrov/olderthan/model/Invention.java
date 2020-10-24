package uk.co.ivandimitrov.olderthan.model;

import java.net.URL;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Invention {
    @Id
    private String Name;
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate created;
    private URL src;

    @Override
    public String toString() {
        return Name + " " + created + " " + src;
    }
}
